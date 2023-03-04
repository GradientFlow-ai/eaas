import {
  UserCircleIcon,
  LockClosedIcon,
  LockOpenIcon,
  FireIcon,
  PaperAirplaneIcon,
  ArrowUpOnSquareIcon,
} from "@heroicons/react/24/solid";
import { Formik, Form, Field } from "formik";
import Head from "next/head";
import type { ReactElement } from "react";
import { Github } from "@components/shared/icons";
import { useSession } from "next-auth/react";

import {
  BaseButton,
  BaseButtons,
  BaseDivider,
  SectionTitleLineWithButton,
} from "@components/shared/BaseButton";
import {
  CardBox,
  CardBoxComponentFooter,
  CardBoxComponentBody,
} from "@components/shared/CardBox";

import { FormField, FormFilePicker } from "@components/shared/FormField";
import { UserCard } from "@components/shared/User";

import { SectionMain } from "@components/layout";

type UserForm = {
  name: string;
  email: string;
};
const AvatarUpload = () => (
  <>
    <CardBox className="mb-6">
      <FormField label="Avatar" help="Max 500kb">
        <FormFilePicker
          label="Upload"
          color="info"
          icon={<ArrowUpOnSquareIcon />}
        />
      </FormField>
    </CardBox>
  </>
);
const ProfilePage = () => {
  const { data: session } = useSession();
  const { email: userEmail, image, name: userName } = session?.user || {};

  const userForm: UserForm = {
    name: userName || "Friend",
    email: userEmail || "johndoe@mail.com",
  };

  return (
    <>
      <SectionMain>
        <UserCard
          className="mb-6"
          userName={userName || "friend"}
          userImage={image}
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="flex flex-col">
            <CardBox className="flex-1" hasComponentLayout>
              <Formik
                initialValues={userForm}
                onSubmit={(values: UserForm) =>
                  alert(JSON.stringify(values, null, 2))
                }
              >
                <Form className="flex flex-1 flex-col">
                  <CardBoxComponentBody>
                    <FormField
                      label="Name"
                      help="Required. Your name"
                      labelFor="name"
                      icon={<UserCircleIcon />}
                    >
                      <Field name="name" id="name" placeholder="Name" />
                    </FormField>
                    <FormField
                      label="E-mail"
                      help="Required. Your e-mail"
                      labelFor="email"
                      icon={<PaperAirplaneIcon />}
                    >
                      <Field name="email" id="email" placeholder="E-mail" />
                    </FormField>
                  </CardBoxComponentBody>
                  <CardBoxComponentFooter>
                    <BaseButtons>
                      <BaseButton color="info" type="submit" label="Submit" />
                      <BaseButton color="info" label="Options" outline />
                    </BaseButtons>
                  </CardBoxComponentFooter>
                </Form>
              </Formik>
            </CardBox>
          </div>

          <CardBox hasComponentLayout>
            <Formik
              initialValues={{
                currentPassword: "",
                newPassword: "",
                newPasswordConfirmation: "",
              }}
              onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
            >
              <Form className="flex flex-1 flex-col">
                <CardBoxComponentBody>
                  <FormField
                    label="Current password"
                    help="Required. Your current password"
                    labelFor="currentPassword"
                    icon={<FireIcon />}
                  >
                    <Field
                      name="currentPassword"
                      id="currentPassword"
                      type="password"
                      autoComplete="current-password"
                    />
                  </FormField>

                  <BaseDivider />

                  <FormField
                    label="New password"
                    help="Required. New password"
                    labelFor="newPassword"
                    icon={<LockOpenIcon />}
                  >
                    <Field
                      name="newPassword"
                      id="newPassword"
                      type="password"
                      autoComplete="new-password"
                    />
                  </FormField>

                  <FormField
                    label="Confirm password"
                    help="Required. New password one more time"
                    labelFor="newPasswordConfirmation"
                    icon={<LockClosedIcon />}
                  >
                    <Field
                      name="newPasswordConfirmation"
                      id="newPasswordConfirmation"
                      type="password"
                      autoComplete="new-password"
                    />
                  </FormField>
                </CardBoxComponentBody>

                <CardBoxComponentFooter>
                  <BaseButtons>
                    <BaseButton color="info" type="submit" label="Submit" />
                    <BaseButton color="info" label="Options" outline />
                  </BaseButtons>
                </CardBoxComponentFooter>
              </Form>
            </Formik>
          </CardBox>
        </div>
      </SectionMain>
    </>
  );
};

export default ProfilePage;
