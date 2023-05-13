import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import tw from "tailwind-styled-components";

import { updateInSupabase } from "lib/saveInfoToSupabase";
import { licenses } from "lib/licenses";
import { usePageState, useSetAppState } from "state";

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

const TextArea = tw.textarea`
  border
  border-gray-300
  rounded
  w-full
  p-2
  mb-4
  resize-none
  transition-all
  duration-300
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
const ToggleButton = tw.button`
  bg-gray-200
  hover:bg-gray-300
  text-gray-700
  font-semibold
  py-1
  px-3
  rounded
  shadow-md
  transition
  duration-200
  mb-4
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
const ShimmerText = tw.h1`
  animate-text
  bg-gradient-to-r
  from-teal-500
  via-purple-700
  to-orange-500
  bg-clip-text
  text-transparent
  text-5xl
  font-black
  text-center
  mt-8
`;

const TransitionDiv = tw.div`
  transition-all
  duration-500
`;

type FormValues = {
  userId?: string;
  userName: string;
  embeddingsName: string;
  embeddingsModel: string;
  description: string;
  license: string;
  contributorName: string;
};

const UserInfoForm = ({ goBackToFront }: { goBackToFront: () => void }) => {
  const { data: session } = useSession();
  const [fileInfoSavedToSupabase, setFileInfoSavedToSupabase] = useState<{
    uuid: null | string;
  }>({
    uuid: null,
  });

  const [isFocused, setIsFocused] = useState(false);
  const updateAppState = useSetAppState();

  const { register, handleSubmit, formState } = useForm<FormValues>();
  const { uploadedFileUUID } = usePageState();

  useEffect(() => {
    if (fileInfoSavedToSupabase?.uuid) {
      updateAppState({ fileInfoUpdated: fileInfoSavedToSupabase.uuid });
    }
  }, [fileInfoSavedToSupabase, updateAppState]);

  const onSubmit = async (data: FormValues) => {
    await updateInSupabase(
      {
        ...data,
        userEmail: session?.user?.email || "",
        uuid: uploadedFileUUID,
      },
      setFileInfoSavedToSupabase,
    );
  };
  return (
    <TransitionDiv>
      {fileInfoSavedToSupabase.uuid ? (
        <ShimmerText onClick={goBackToFront}>
          Thank you for your contribution!
        </ShimmerText>
      ) : (
        <>
          <Heading>Thank you! You rock!</Heading>
          <Paragragh>
            Can you tell us more about the embeddings you are contributing? (All
            fields are optional)
          </Paragragh>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Label htmlFor="description">Description</Label>
            <TextArea
              id="description"
              {...register("description")}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              rows={isFocused ? 10 : 2}
            />
            <ToggleButton
              type="button"
              onClick={() => setIsFocused((prev) => !prev)}
            >
              {isFocused ? "Hide" : "Show more"}
            </ToggleButton>
            <Label htmlFor="embeddingsModel">
              Model Used to Train the Embeddings
            </Label>
            <Input id="embeddingsModel" {...register("embeddingsModel")} />

            <Label htmlFor="embeddingsName">Embeddings Name</Label>
            <Input id="embeddingsName" {...register("embeddingsName")} />

            <Label htmlFor="contributorName">Contributor Name</Label>
            <Input id="contributorName" {...register("contributorName")} />

            <Label htmlFor="license">License</Label>
            <Select id="license" {...register("license")}>
              <option value="">Select License</option>
              {licenses.map((license) => (
                <option key={license} value={license}>
                  {license}
                </option>
              ))}
            </Select>

            <Button type="submit">Submit</Button>
          </Form>
        </>
      )}
    </TransitionDiv>
  );
};

export default UserInfoForm;
