import * as contentful from "contentful";
import s from "./Style.module.scss";
import { useState } from "react";
import { useEffect } from "react";

export const WebsiteGallery = () => {
  const [websiteCards, setWebsiteCards] = useState([]);

  const client = contentful.createClient({
    space: import.meta.env.VITE_PUBLIC_SPACE_ID,
    accessToken: import.meta.env.VITE_PUBLIC_ACCESS_TOKEN,
  });

  useEffect(() => {
    client.getEntries({ content_type: "websiteCard" }).then((res) => {
      setWebsiteCards(res.items);
      console.log(res.items);
    });
  }, []);

  return (
    <section className={s.WebsiteGallery}>
      <h2>Tidligere projekter</h2>
      <div className={s.card_grid}>
        {websiteCards?.map((item) => (
          <figure>
            <a
              href={item.fields.link}
              target="_blank"
              className={s.link_wrapper}
            ></a>
            <div
              className={s.img_container}
              style={{
                backgroundImage: `url(${item.fields.thumbnail.fields.file.url})`,
              }}
            ></div>
            <figcaption>
              <article>
                <h3>{item.fields.title}</h3>
                <p>{item.fields.description}</p>
              </article>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};
