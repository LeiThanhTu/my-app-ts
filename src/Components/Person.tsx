import type {FC} from 'react';
import { useState } from 'react';

interface Props {
  name: string;
  age: number;
  email: string;
}

export const Person: FC<Props> = ({name, email, age}: Props) =>{
  
  const [country, setCountry] = useState<string | null>("");

  return (
    <div>
      <h1>{props.name}</h1>
      <p>Age: {props.age}</p>
      <p>Email: {props.email}</p>
      <input placeholder="Write down your country..." onChange={(even) => {setCountry(even)}}>{country}</input>
    </div>
  );
}
