export default function About() {
  return (
    <div>
      <div>about 화면 임</div>
    </div>
  );
}

export const getStaticProps = async () => {
  const test = "hello";

  return {
    props: {
      test,
    },
  };
};
