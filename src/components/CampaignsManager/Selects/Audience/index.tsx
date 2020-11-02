import React, {
  useEffect,
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { Option } from 'components/shared/Select';
import BaseSelect from 'components/shared/Select/BaseSelect';
import getData from 'services/campaigns-manager/getAudience';
import transformer from 'services/campaigns-manager/transformers/audienceToSelectOptions';
import { Audience } from 'services/campaigns-manager/interfaces/Campaign';

interface Props {
  className?: string;
  label?: string;
  setValue(value: Audience | null): void;
  value: Audience | null;
  placeholder?: string;
  error?: string;
}

export interface AudienceHandles {
  options: Audience[];
}

const AudienceSelect: React.ForwardRefRenderFunction<AudienceHandles, Props> = (
  { className, value, setValue, label, placeholder, error },
  ref,
) => {
  const [options, setOptions] = useState<Audience[]>([]);
  const [internalValue, setInternalValue] = useState<Option | null>(null);

  useImperativeHandle(ref, () => ({ options }));

  useEffect(() => {
    getData().then(data => setOptions(data));
  }, []);

  useEffect(() => {
    if (!value) {
      setInternalValue(null);
      return;
    }
    setInternalValue({
      title: value.customer.name,
      value: value.customer.id.toString(),
    });
  }, [value]);

  const handleSetValue = useCallback(
    (v: Option | null): void => {
      if (!v) {
        setValue(null);
        return;
      }
      const foundCustomer = options.find(
        item => item.customer.id === parseInt(v.value, 0),
      );
      setValue(foundCustomer || null);
    },
    [setValue, options],
  );

  const loadItems = useCallback(() => {
    return transformer(options);
  }, [options]);

  return (
    <BaseSelect
      label={label}
      loadItems={loadItems}
      className={className}
      value={internalValue}
      setValue={handleSetValue}
      placeholder={placeholder}
      inputRole="secondary"
      error={error}
    />
  );
};

export default forwardRef(AudienceSelect);
