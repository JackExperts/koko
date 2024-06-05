
#KoKo

KoKo é um componente de terminal do JumpServer para conexão de protocolos de caracteres, suportando protocolos como SSH, TELNET, MySQL, Redis, entre outros.

KoKo é implementado usando Golang e Vue, e seu nome vem do herói Kunkka do jogo Dota.

Principais Funcionalidades

- SSH
- SFTP
- Terminal web
- Web

Ambiente de Desenvolvimento

1. Execute o backend do servidor

```shell
$ cp config_example.yml config.yml  # 1. Prepare o arquivo de configuração
$ vim config.yml  # 2. Modifique o arquivo de configuração, edite o endereço e o bootstrap key
CORE_HOST: http://127.0.0.1:8080
BOOTSTRAP_TOKEN: PleaseChangeMe <mude para o mesmo valor do core>

$ go run cmd/koko/koko.go # 3. Execute, precisa do go instalado. Se não tiver, instale de golang.org
```

2. Execute o frontend da interface
```shell
$ cd ui 
$ yarn install
$ npm run serve
```

3. Teste
No luna, acesse os ativos Linux, copie o endereço do iframe e modifique a porta para 9530. Também é possível modificar o nginx para mapear /koko para este local.

Construção de Imagem Docker
Dependendo de docker buildx para construção de imagens multi-plataforma, é necessário ter docker versão 19.03+ e habilitar o plugin docker buildx.

```shell
make docker
```
Após a construção, a imagem KoKo será gerada.
