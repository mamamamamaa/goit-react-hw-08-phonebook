import { RegisterForm } from '../components/RegisterForm/RegisterForm';

export const Register = () => {
  return (
    <div className="bg-white shadow-2xl px-11 py-7 rounded-2xl w-96 h-[480px]">
      <h1 className="text-2xl pb-6 text-center">Register form</h1>
      <RegisterForm />
    </div>
  );
};
