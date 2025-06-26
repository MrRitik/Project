export const SLIDER_CONFIG = {
  DEFAULT: {
    WIDTH: '100%',
    HEIGHT: '100%',
    AUTO_PLAY: false,
    INTERVAL: 3000,
    SHOW_DOTS: true,
    SHOW_ARROWS: true,
    ARROW_SIZE: 'medium' as const,
    DOT_SIZE: 'medium' as const,
  },
  DOT_SIZES: {
    small: 6,
    medium: 8,
    large: 10,
  },
};

export const PROFILE_INITIAL_DATA = {
  firstName: 'Vishal',
  lastName: 'Singh',
  email: 'vishal.singh@aithinkers.com',
  bio: 'UX/UI Developer',
  phone: '9030973722',
  dateOfJoining: '01/05/2018',
  country: 'India',
  zipCode: '500030',
  cityState: 'Hyderabad, Telangana',
} as const;

export const EMPLOYEE_DATA = [
  { name: 'Vishal Singh', title: 'UX/UI Developer', manager: 'Arvind Kumar' },
  { name: 'Abhishek Shil', title: 'Software Engineer', manager: 'Sushil Pandey' },
  { name: 'Abrish Kumar', title: 'Software Engineer', manager: 'Vivek Kumar' },
  { name: 'Abrish Kumar', title: 'Software Engineer', manager: 'Vivek Kumar' },
  { name: 'Abrish Kumar', title: 'Software Engineer', manager: 'Vivek Kumar' },
  { name: 'Srinivas Kumar', title: 'Frontend Developer', manager: 'Vikram Thakur' },
  { name: 'Abrish Kumar', title: 'Software Engineer', manager: 'Vivek Kumar' },
  { name: 'Ritika Sharma', title: 'QA Engineer', manager: 'Nidhi Rani' },
  { name: 'Raj Verma', title: 'Backend Developer', manager: 'Rakesh Sen' },
];

export const CITY_STATE_OPTION= [
  { value: 'Hyderabad, Telangana', label: 'Hyderabad, Telangana' },
  { value: 'Bangalore, Karnataka', label: 'Bangalore, Karnataka' },
  { value: 'Mumbai, Maharashtra', label: 'Mumbai, Maharashtra' },
  { value: 'Delhi, NCR', label: 'Delhi, NCR' },
  { value: 'Chennai, Tamil Nadu', label: 'Chennai, Tamil Nadu' },
];