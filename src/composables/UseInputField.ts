import { useField } from 'vee-validate'

export default function useInputField(
  id: string,
  label: string,
  validations: { [Key: string]: any },
  initialValue?: any,
) {
  const { value: input, errorMessage, meta } = useField<string | null>(
    id,
    validations,
    {
      label: label,
      initialValue: initialValue,
    },
  )

  return {
    input,
    errorMessage,
    meta,
  }
}
