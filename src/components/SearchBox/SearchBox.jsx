import { useSearchParams } from "react-router-dom";
import { Form, Input, Icon, Button } from "./SearchBox.styled";

export const SearchBox = () => {
  const [, setSearchParams] = useSearchParams();
  
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ name: form.elements.query.value.trim() });
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Button type="submit"><Icon /></Button>
      <Input
        type="text"
        name="query"
      />
    </Form>
  );
};