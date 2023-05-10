import { Field, FieldProps, Form, Formik, FormikHandlers } from "formik";
import dynamic from "next/dynamic";
import * as yup from "yup";

const Button = dynamic(() => import("@/components/Button"));
const Input = dynamic(() => import("@/components/Input"));
const Textarea = dynamic(() => import("@/components/Textarea"));

interface FormComponentProps {
  value: string;
  onChange: FormikHandlers["handleChange"];
  id: string;
  name: string;
  className?: string;
}

type FormConfig = Record<
  string,
  {
    component: (props: FormComponentProps) => JSX.Element;
    label: string;
  }
>;

const formConfig: FormConfig = {
  name: {
    component: (props) => <Input type="text" placeholder="name" {...props} />,
    label: "Name",
  },
  email: {
    component: (props) => <Input type="email" placeholder="email" {...props} />,
    label: "Email",
  },
  message: {
    component: (props) => <Textarea placeholder="message" {...props} />,
    label: "Message",
  },
};

const Contact: React.FC = () => (
  <main>
    <h1 className="text-2xl">Contact</h1>

    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",
      }}
      onSubmit={(data, { setSubmitting }) => {
        console.log(data);
        setSubmitting(false);
      }}
      validationSchema={yup.object().shape({
        name: yup.string().required("Required"),
        email: yup.string().email("Invalid email address").required("Required"),
        message: yup.string().required("Required"),
      })}
    >
      {(state) => (
        <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex gap-3 flex-col">
          {Object.keys(state.initialValues).map(
            (name, i) =>
              formConfig.hasOwnProperty(name) && (
                <Field name={name} key={i}>
                  {({
                    field,
                    form,
                  }: FieldProps<typeof state.initialValues>) => (
                    <span>
                      <label
                        className={`block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4`}
                        htmlFor={name}
                      >
                        {formConfig[name].label}
                      </label>
                      {formConfig[name].component({
                        value: field.value[name],
                        onChange: field.onChange,
                        id: name.toString(),
                        ...(!!form.errors[name] &&
                          !!form.touched[name] && {
                            className: "text-red-500 border-red-500",
                          }),
                        name,
                      })}
                      <p className="mb-1 text-red-500">
                        {form.errors[name]?.toString()}
                      </p>
                    </span>
                  )}
                </Field>
              )
          )}
          <Button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            disabled={state.isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  </main>
);

export default Contact;
