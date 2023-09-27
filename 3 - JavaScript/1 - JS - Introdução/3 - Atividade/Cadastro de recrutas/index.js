let nome, sobrenome, estudo, nascimento, idade

nome = prompt("Insira seu nome:")
sobrenome = prompt("Insira seu sobrenome: ")
estudo = prompt("Insira seu campo de estudo: ")
nascimento = prompt("Insira seu ano de nascimento")
idade = 2023 - nascimento

confirm("Seu nome é " + nome + " " + sobrenome + ". " + "Estuda " + estudo + " e tem " + idade + "anos?")