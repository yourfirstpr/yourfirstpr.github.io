![Header](README_header.png)

## Configuring and running locally

If you're interested in running **Your First PR** locally, please note that this project uses [Jekyll](https://jekyllrb.com/). [Jekyll](https://jekyllrb.com/) is a blog-aware static site generator written in Ruby, distributed under an Open Source license.

The first step is to clone this repo and go into the folder:

```
git clone https://github.com/yourfirstpr/yourfirstpr.github.io.git
cd yourfirstpr.github.io
```

Next, install the dependencies with the Bundler:

```
bundle
```

If you haven't got Bundler installed, run the following Ruby command:

```
gem install bundler
```

You can now run Jekyll locally, using the following command:

```
bundle exec jekyll serve
```

That's it – you're now ready to go! Your local site will be available at `http://localhost:4000`.

If you want to use another port, you can provide the `-P` option, like this:

```
bundle exec jekyll serve -P 4242
```
execute the same with cmd using "bash exec -x "your command""
