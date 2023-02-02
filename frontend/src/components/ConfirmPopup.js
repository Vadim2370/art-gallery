import PopupWithForm from './PopupWithForm';

function ConfirmPopup({
  isOpen, onClose, card, onCardDelete, isLoading,
}) {
  function handleSubmit(evt) {
    evt.preventDefault();
    onCardDelete(card);
  }

  return (
    <PopupWithForm
      name="confirm"
      title="Вы уверены?"
      buttonTitle="Да"
      buttonLoadingTitle="Удаление..."
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      isValid={true}
    />
  );
}

export default ConfirmPopup;
