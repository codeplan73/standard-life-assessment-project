import articleImage from "../../assets/img/article-image.png";

const Article = () => {
  return (
    <article className="flex flex-col gap-4 py-8 font-inter">
      <img className="w-full md:h-72" src={articleImage} alt="post" />
      <p className="text-md">
        If {`you're`} like me then you just got into the UI/UX design space, or
        perhaps you heard about it vaguely and it interest you but you lack deep
        knowledge as to if it will make a good career path. I am here to share
        my knowledge with you, {`let's`} grow together.
      </p>
      <p className="text-md">
        In this post I will be answering some questions that you may have, that
        I asked before embarking on this journey.
      </p>

      <h4 className="font-serif text-xl font-semibold">What is UI/UX</h4>

      <p className="font-sans text-md">
        While they usually both come up in the same context, UI is not UX. UI
        fully called User interface refers to what consumers/people who use a
        product see when they interact with the product. For example, what you
        see when you go on a website; the arrangement of the sections, the
        website layout, down to the colours used are functions of the UI.
      </p>

      <p className="font-sans text-md">
        UX on the other hand is known as user experience. From the word
        ‘experience’, you have a vague idea of its meaning. Basically, how a
        customer/prospective feel when they use or interact with a product. They
        work in tandem in the process of product design.
      </p>
      <p className="font-sans text-md">
        User interface is involved in everyday life, because we interact with
        software everyday. Your smartphone was designed with UI, the apps on
        your phone? UI, the atm, UI and a lot more.
      </p>
      <p className="font-sans text-md">
        UX now, is the workability and usability of a {`product's`} UI. Have you
        ever gone on Playstore or AppStore to download an app and read the
        reviews? Some people complain about icons that are too small or too
        large, {`that's`} an example of a bad UX. {`It's`} a result of a bad UI.
      </p>
      <p className="font-sans text-md">
        To avoid such case of a bad UI there are principles of design that serve
        as a guide. They vary in number depending on who you ask. I will discuss
        six now |
      </p>
      <p className="font-sans text-md">Balance</p>
      <p className="font-sans text-md">Visual hierarchy</p>
      <p className="font-sans text-md">Emphasis</p>
      <p className="font-sans text-md">Repetition</p>
      <p className="font-sans text-md">Negative Space</p>
      <p className="font-sans font-semibold text-md">Balance</p>
      <p className="font-sans text-md">
        Balance is created when you distribute design across the page. It would
        be unwise to fill just one side of the page with good design and leave
        the other half empty. The ability to distribute, combine and align
        design give a good balance.
      </p>
    </article>
  );
};

export default Article;
