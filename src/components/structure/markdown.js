import React, {useEffect} from 'react'
import MarkdownIt from "markdown-it"
import highlight from "../../helpers/highlight";

export const Markdown = ({content, className = ''}) => {

  const parser = new MarkdownIt({
    html: false, // desactivamos el uso de HTML dentro del markdown
    breaks: true, // transforma los saltos de línea a un <br />
    linkify: true, // detecta enlaces y los vuelve enlaces
    xhtmlOut: true, // devuelve XHTML válido (por ejemplo <br /> en vez de <br>)
    typographer: true, // reemplaza ciertas palabras para mejorar el texto
    langPrefix: "language-" // agrega una clase `language-[lang]` a los bloques de código
  });

  useEffect(() => {
    highlight.highlightCode()
  }, []);


  return (
    <div
      dangerouslySetInnerHTML={{
        __html: parser.render(content)
      }}
      className={className}
    />
  )
}