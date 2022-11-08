import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Counter } from './components/state/Counter';
import { LoggedIn } from './components/state/LoggedIn';
import { Status } from './components/Status';
import {ThemeContextProvider} from './components/context/ThemeContext';
import {Box} from './components/context/Box';
import {UserContextProvider} from './components/context/UserContext';
import { User } from './components/context/User';
import { DomRef } from './components/ref/DomRef';
import { MutableRef } from './components/ref/MutableRef';

function App() {
  const personName = {
    first: 'Wayne',
    last: 'Rooney',
  }

  const personList = [
    {
      first: 'Wayne',
      last: "Rooney"
    },
    {
      first: 'Lionel',
      last: "Messi"
    },
    {
      first: 'Toni',
      last: "Kroos"
    }
  ]
  return (
    <div className="App">
       {/* <Greet name="Jason" isLoggedIn={false}/>  */}
      {/* <Person name= {personName} />
      <PersonList names={personList} />
      <Status status='loading' /> */}
      {/* <Heading>Placeholder text</Heading> */}
      {/* <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar> */}
      <Button handleClick={(event, id) => {
        console.log("Button clicked", event, id);
      }} />
      <Input value='' handleChange={(event) => console.log(event)
      } />

      <Container styles={{border:'1px solid black', padding:'1rem'}} />

      <LoggedIn />

      <Counter />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>

      <UserContextProvider>
        <User />
      </UserContextProvider>

      <DomRef />

      <MutableRef />
    </div>
  );
}

export default App;
