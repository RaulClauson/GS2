const Cadastro = ({ setIsLogin }: { setIsLogin: (value: boolean) => void }) => {
  return (
    <form>
      <fieldset>
        <h1>Cadastro</h1>
        <a onClick={() => setIsLogin(true)}>
          Já possui uma conta? <span>Entrar</span>
        </a>
      </fieldset>
      <input type="text" name="name" id="name" placeholder="Nome" required />
      <input type="text" name="CEP" id="CEP" placeholder="CEP" required />
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
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Confirmar senha"
        required
      />
      <p>
        <span>Esqueceu sua senha?</span>
      </p>
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default Cadastro;
