import Avatar from './components/profileSample.jsx';
import Clock from './components/clock.jsx';

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default function Profile() {
  return (
    <div>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    
    <Clock />
    </div>
  );
}
