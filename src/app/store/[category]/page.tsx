interface categoryprops {
  params: {
    category: string;
  };
}

const category = (props: categoryprops) => {
  const { category } = props.params;

  return <div>Categoria dinamica: {category}</div>;
};

export default category;
