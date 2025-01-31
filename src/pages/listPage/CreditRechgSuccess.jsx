import PrimaryButton from '@/components/PrimaryButton';

export default function CreditRechgSuccess({ onConfirm }) {
  return (
    <div>
      <p>충전 성공!</p>
      <PrimaryButton onClickFunc={onConfirm}>확인</PrimaryButton>
    </div>
  );
}
