const Login = ({ setIsLogin }: { setIsLogin: (value: boolean) => void }) => {
  return (
    <form>
      <fieldset>
        <h1>Olá, Boas-vindas!</h1>
        <a onClick={() => setIsLogin(false)}>
          Ainda não tem uma conta? <span>Cadastrar</span>
        </a>
      </fieldset>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        required
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Senha"
        required
      />
      <p>
        <span>Esqueceu sua senha?</span>
      </p>
      <button type="submit">Entrar</button>
    </form>
  );
};

export default Login;
