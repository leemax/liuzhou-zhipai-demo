import { useEffect, useRef } from 'react';
import * as PIXI from 'pixi.js';

const CARD_W = 60;
const CARD_H = 90;

export default function Desk() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // v8 需异步创建 Application
    let app: PIXI.Application;
    (async () => {
      app = await PIXI.Application.create({
        resizeTo: containerRef.current,
        background: 0x2a8c55,   // 绿色牌桌
        antialias: true,
      });
      containerRef.current!.appendChild(app.canvas);

      // 画 21 张占位牌
      for (let i = 0; i < 21; i++) {
        const g = new PIXI.Graphics()
          .beginFill(0xffffff)
          .drawRoundedRect(0, 0, CARD_W, CARD_H, 6)
          .endFill()
          .lineStyle({ width: 2, color: 0x000000 })
          .drawRoundedRect(0, 0, CARD_W, CARD_H, 6);

        g.x = 40 + i * (CARD_W * 0.3);
        g.y = app.renderer.height - CARD_H - 20;
        app.stage.addChild(g);
      }
    })();

    return () => app && app.destroy(true);
  }, []);

  return <div ref={containerRef} style={{ flex: 1 }} />;
}
