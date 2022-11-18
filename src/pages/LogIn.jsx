import { LogInForm } from '../components/LogInForm/LogInForm';
import formStyle from '../components/FormStyles/FormStyles.module.scss';

export const LogIn = () => {
  return (
    <div className={formStyle.formContainer}>
      <h1 className="text-2xl pb-6 text-center">LogIn form</h1>
      <LogInForm />
    </div>
  );
};
