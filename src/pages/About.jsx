import * as contentful from "contentful";
import s from "./Page.module.scss";
import { useState } from "react";
import { useEffect } from "react";

export const About = () => {
  const [about, setAbout] = useState(null);

  const client = contentful.createClient({
    space: import.meta.env.VITE_PUBLIC_SPACE_ID,
    accessToken: import.meta.env.VITE_PUBLIC_ACCESS_TOKEN,
  });

  useEffect(() => {
    client.getEntries({ content_type: "about" }).then((res) => {
      if (res.items.length > 0) {
        setAbout(res.items[0]);
      }
      // console.log(res.items);
    });
  }, []);
  return (
    <>
      <section>
        {about && (
          <div
            className={s.img_container}
            style={{
              backgroundImage: `url{${about.fields.hero.fields.file.url}}`,
            }}
          ></div>
        )}
        {about && <h2>{about.fields.name}</h2>}
      </section>
    </>
  );
};
