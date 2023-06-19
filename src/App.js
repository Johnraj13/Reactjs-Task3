import React from 'react';
import ColorPicker from './colorpicker';

const App = () => {
  const colors = ['Violet', 'Indigo', 'Blue', 'Green', 'Yellow', 'Orange', 'Red','Aqua','Salmon','Lime','Magenta','Midnightblue','chartreuse','cadetblue','crimson','deeppink','fuchsia','grey','white','black','greenyellow'];

  return (
    <div>
      <ColorPicker colors={colors} />
    </div>
  );
};

export default App;
