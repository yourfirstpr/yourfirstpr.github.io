![Header](README_header.png)

## Configurando e executando localmente

Se você estiver interessado em executar **Your First PR** localmente, observe que este projeto usa [Jekyll](https://jekyllrb.com/). [Jekyll](https://jekyllrb.com/) é um gerador de site estático, com suporte para blogs, escrito em Ruby, distribuído sob uma licença Open Source.

O primeiro passo é clonar este repositório e ir para a pasta:

```
git clone https://github.com/yourfirstpr/yourfirstpr.github.io.git
cd yourfirstpr.github.io
```

Em seguida, instale as dependências com o Bundler:

```
bundle
```

Se você não tiver o Bundler instalado, execute o seguinte comando Ruby:

```
gem install bundler
```

Agora você pode executar o Jekyll localmente, usando o seguinte comando:

```
bundle exec jekyll serve
```

É isso aí - agora você está pronto para ir! Seu site local estará disponível em `http://localhost:4000`.

Se você quiser usar outra porta, você pode fornecer a opção `-P`, assim:

```
bundle exec jekyll serve -P 4242
```
