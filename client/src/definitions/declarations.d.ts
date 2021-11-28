declare module 'react-bootstrap-custom-inputs' {
  interface AutocompleteProps {
    onChange: function;
    value: string;
    list: array;
    name: string;
  }

  class Autocomplete extends React.Component<AutocompleteProps> {}

  interface ReactBootstrapEvent {
    target: {
      name: string;
      value: string;
    };
  }
}
