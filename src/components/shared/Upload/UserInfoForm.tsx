import { useContext } from "react";
import { useForm } from "react-hook-form";
import tw from "tailwind-styled-components";

import { useSetAppState } from "state";

const Form = tw.form`
  mt-4
`;

const Label = tw.label`
  block
  font-medium
  mb-2
`;

const Input = tw.input`
  border
  border-gray-300
  rounded
  w-full
  p-2
  mb-4
`;

const Select = tw.select`
  border
  border-gray-300
  rounded
  w-full
  p-2
  mb-4
`;

const Button = tw.button`
  bg-blue-400
  hover:bg-blue-500
  text-white
  font-semibold
  py-2
  px-4
  rounded
  shadow-md
  transition
  duration-200
  ${(p) => p.disabled && "opacity-50 cursor-not-allowed"}
`;
const Heading = tw.h1`
bg-gradient-to-br
from-black
to-stone-500
bg-clip-text
text-center
font-display
text-xl
text-transparent
drop-shadow-sm
`;

const Paragragh = tw.p`
text-center
font-display
text-lg
text-gray-600
`;

const UserInfoForm = () => {
  const { register, handleSubmit, formState } = useForm();

  const { updateAppState } = useSetAppState();

  const onSubmit = (data) => {
    console.log(data);
    /* updateAppState({ ...data }); */
  };
  return (
    <div>
      <Heading>Thank you! You rock!</Heading>
      <Paragragh>
        Can you tell us more about the embeddings you are contributing? (All
        fields are optional)
      </Paragragh>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="userName">Contributor's Name</Label>
        <Input id="userName" {...register("userName")} />

        <Label htmlFor="embeddingsName">Embeddings Name</Label>
        <Input id="embeddingsName" {...register("embeddingsName")} />

        <Label htmlFor="modelUsed">Model Used To Train the Embeddings</Label>
        <Input id="modelUsed" {...register("modelUsed")} />

        <Label htmlFor="license">License</Label>
        <Select id="license" {...register("license")}>
          <option value="">Select License</option>
          <option value="mit">MIT License</option>
          <option value="gpl">GNU General Public License (GPL)</option>
          <option value="apache">Apache License 2.0</option>
          <option value="bsd">BSD License</option>
          <option value="other">Other</option>
        </Select>

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default UserInfoForm;
