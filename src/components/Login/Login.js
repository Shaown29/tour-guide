import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle}=useAuth();
    // const history = useHistory();
    // const navigate=useNavigate();

    // useEffect(()=>{
    //     if(user){
    //    history.push('/home');
    //     }
    // },[user,history])
   
    return (
        <div>
            <h2>Please log in</h2>
            <button onClick={signInUsingGoogle}>Google sign in</button>
        </div>
    );
};

export default Login;