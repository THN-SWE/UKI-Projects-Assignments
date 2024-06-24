// intersection type: (type1 & type2) meaning contains both types

type Dragable = {
  drag: () => void;
};
type Resizable = {
  resize: () => void;
};

type UiWidget = Dragable & Resizable; // intersection type

let textBox: UiWidget = {
  resize: () => {},
  drag: () => {},
};
