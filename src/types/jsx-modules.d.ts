// Type declarations for JSX modules
declare module '*.jsx' {
  import { ComponentType } from 'react';
  const Component: ComponentType<any>;
  export default Component;
}

// Specific module declarations
declare module './components/header/Header' {
  import { ComponentType } from 'react';
  const Header: ComponentType<any>;
  export default Header;
}

declare module './components/footer/Footer' {
  import { ComponentType } from 'react';
  const Footer: ComponentType<any>;
  export default Footer;
}

declare module './components/protected-route/ProtectedRoute' {
  import { ComponentType } from 'react';
  const ProtectedRoute: ComponentType<any>;
  export default ProtectedRoute;
}

declare module './pages/Home' {
  import { ComponentType } from 'react';
  const Home: ComponentType<any>;
  export default Home;
}

declare module './pages/AboutMe' {
  import { ComponentType } from 'react';
  const AboutMe: ComponentType<any>;
  export default AboutMe;
}

declare module './pages/Profile' {
  import { ComponentType } from 'react';
  const Profile: ComponentType<any>;
  export default Profile;
}

declare module './pages/ContactUs' {
  import { ComponentType } from 'react';
  const ContactUs: ComponentType<any>;
  export default ContactUs;
}

declare module './components/auth-unified/AuthForm' {
  import { ComponentType } from 'react';
  const AuthForm: ComponentType<any>;
  export default AuthForm;
}

declare module './components/forgot-password/ForgotPassword' {
  import { ComponentType } from 'react';
  const ForgotPassword: ComponentType<any>;
  export default ForgotPassword;
}

declare module './pages/dashboard/StudentDashboard' {
  import { ComponentType } from 'react';
  const StudentDashboard: ComponentType<any>;
  export default StudentDashboard;
}

declare module './pages/dashboard/EducatorDashboard' {
  import { ComponentType } from 'react';
  const EducatorDashboard: ComponentType<any>;
  export default EducatorDashboard;
}

declare module './pages/dashboard/AdminDashboard' {
  import { ComponentType } from 'react';
  const AdminDashboard: ComponentType<any>;
  export default AdminDashboard;
}

declare module './components/pricing-plans/PricingPlans' {
  import { ComponentType } from 'react';
  const PricingPlans: ComponentType<any>;
  export default PricingPlans;
}

declare module './FormField' {
  import { ComponentType } from 'react';
  const FormField: ComponentType<any>;
  export default FormField;
}

declare module './DynamicForm' {
  import { ComponentType } from 'react';
  const DynamicForm: ComponentType<any>;
  export default DynamicForm;
}

declare module './DemoCredentials' {
  import { ComponentType } from 'react';
  const DemoCredentials: ComponentType<any>;
  export default DemoCredentials;
}

declare module './NavigationMenu' {
  import { ComponentType } from 'react';
  const NavigationMenu: ComponentType<any>;
  export default NavigationMenu;
}

declare module './CardGrid' {
  import { ComponentType } from 'react';
  const CardGrid: ComponentType<any>;
  export default CardGrid;
}

declare module '@/utils/api' {
  export const authAPI: any;
  export const apiUtils: any;
}
