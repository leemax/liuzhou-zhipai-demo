import { useEffect, useRef } from 'react';
import * as PIXI from 'pixi.js';

const CARD_W = 60;
const CARD_H = 90;

export default function Desk() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!hostRef.current) return;

    // ✅ v7 经典写法：同步 new
    const app = new PIXI.Application({
      resizeTo: hostRef.current,
      background: 0x2a8c55,
      antialias: true,
    });

    // ✅ v7 有 app.view
      hostRef.current!.appendChild(app.view as unknown as HTMLCanvasElement);

    // 画 21 张占位牌
    for (let i = 0; i < 21; i++) {
      const g = new PIXI.Graphics()
        .beginFill(0xffffff)
        .drawRoundedRect(0, 0, CARD_W, CARD_H, 6)
        .endFill()
        .lineStyle({ width: 2, color: 0x000000 })
        .drawRoundedRect(0, 0, CARD_W, CARD_H, 6);

      g.x = 40 + i * CARD_W * 0.3;
      g.y = app.renderer.height - CARD_H - 20;
      app.stage.addChild(g);
    }

    return () => app.destroy(true);
  }, []);

  return <div ref={hostRef} style={{ flex: 1 }} />;
}
