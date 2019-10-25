import React from 'react';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <div className='Header'>
      <Link to="">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAASCAYAAABrXO8xAAAAAXNSR0IArs4c6QAAAPRJREFUOBHVks0KQUEYhoeV8lOSlegkP1nbuAPZ2NkpO1txBzYWlLKwsnUBbsKGrWLB5pRQygXYeD46pzOnCTt565kz7zvfzDRnRqlfqMCmE8h8sXmKmjHInKfqtGdwg1estWncERpaimmBDbKqX3GCLXT8A47v0tlBwgn4hmAJQ09m7A5IVxCBICxgDgFwpRk3VWpG34ID5KAGd/go2WkDN4iZqqXApCZhFGTyyFRgyqqEFyhCGNYg536rMqNXqHiq5A/LVfQ8mdbN4k4gj8EvuVsb5K41JXF7aGupbvJYOYK7sHOOvl5ndBbpFEoyKi/jD/QAHqIgGPWMguQAAAAASUVORK5CYII="
       alt='logo' />
       </Link>
      <h1>Houser</h1>
    </div>
  )
}
