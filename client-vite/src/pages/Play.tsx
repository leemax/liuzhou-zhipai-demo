import Desk from '../components/Desk';
import AdvisorPanel from '../components/AdvisorPanel';

export default function Play() {
  return (
    <div style={{ display: 'flex', height: '100%', width: '100%' }}>
      <Desk />
      <AdvisorPanel />
    </div>
  );
}
