import { useEffect, useRef } from 'react';
import * as PIXI from 'pixi.js';

const CARD_W = 60;
const CARD_H = 90;

export default function Desk() {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!divRef.current) return;
    const app = new PIXI.Application({ resizeTo: divRef.current, background: 0x2a8c55 });
    divRef.current.appendChild(app.view as HTMLCanvasElement);

    // ★ 占位：画 21 张牌
    for (let i = 0; i < 21; i++) {
      const g = new PIXI.Graphics()
        .beginFill(0xffffff)
        .drawRoundedRect(0, 0, CARD_W, CARD_H, 6)
        .endFill()
        .lineStyle(2, 0x000000)
        .moveTo(0, 0)
        .lineTo(CARD_W, 0)
        .lineTo(CARD_W, CARD_H)
        .lineTo(0, CARD_H)
        .lineTo(0, 0);

      g.x = 40 + i * (CARD_W * 0.3);   // 30% 重叠
      g.y = 450;
      app.stage.addChild(g);
    }

    return () => app.destroy(true);
  }, []);

  return <div style={{ flex: 1 }} ref={divRef} />;
}
