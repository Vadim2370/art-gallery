function AddBatton({
  onAddPlace,
}) {
  return (
        <section className="profile page__section">
        <button
          type="button"
          className="profile__add"
          aria-label="Добавить фото"
          onClick={onAddPlace}
        ></button>
        </section>
  );
}

export default AddBatton;
