import { useEffect, useRef } from 'react';
import * as PIXI from 'pixi.js';

const CARD_W = 60;
const CARD_H = 90;

export default function Desk() {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!divRef.current) return;

    // v7 直接 new Application
    const app = new PIXI.Application({
      resizeTo: divRef.current,
      background: 0x2a8c55,
      antialias: true,
    });
    divRef.current.appendChild(app.view);      // v7 用 view

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

  return <div ref={divRef} style={{ flex: 1 }} />;
}
