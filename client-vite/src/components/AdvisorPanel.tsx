import { useState } from 'react';

export default function AdvisorPanel() {
  const [oil, setOil] = useState(12);
  const recommend = ['小7', '大2', '小3'];

  return (
    <div style={{ width: 300, padding: 16, background: '#fafafa', borderLeft: '1px solid #ddd' }}>
      <h3>陪练控制台</h3>
      <p>当前油数： <b style={{ color: oil >= 15 ? 'green' : 'red' }}>{oil}</b></p>

      <h4>推荐出牌</h4>
      {recommend.map(card => (
        <button key={card} style={{ marginRight: 8, marginBottom: 8 }}>
          {card}
        </button>
      ))}

      <hr />
      <button onClick={() => setOil(oil + 1)}>+1 油 (调试)</button>
    </div>
  );
}
