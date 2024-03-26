import Main from '../pages/Main.tsx';

type DisplayedPlaces = {
  displayedPlaces: number;
}

export default function App({displayedPlaces}: DisplayedPlaces): JSX.Element {
  return (
    <Main displayedPlaces={displayedPlaces}/>
  );
}