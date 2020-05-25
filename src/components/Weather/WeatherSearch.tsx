import React, { Dispatch, FormEvent } from 'react'
import Select from 'react-select'
import countries from 'countries-list'
import {
  StyledTextInput,
  StyledSubmitButton,
} from 'styles/components/StyledWeatherSearch'

interface SelectOptions {
  label: string
  value: string
}

interface SelectState {
  isFocused: boolean
}

interface IProps {
  city: string
  country: string
  setCity: Dispatch<string>
  setCountry: Dispatch<string>
  onSubmit: (event: FormEvent) => void
}

const WeatherSearch:React.FC<IProps> = ({
  city,
  country,
  setCity,
  setCountry,
  onSubmit,
}) => {
  const options: Array<SelectOptions> =
    Object
      .entries(countries.countries)
      .map(([alpha2Code, { name, emoji }]) => ({
        label: `${name} ${emoji}`,
        value: alpha2Code,
      }))
      .sort((currentOption, nextOption) => (
        currentOption.label.localeCompare(nextOption.label)
      ))

  const defaultValue = options.find(({ value }) => value === country)

  return (
    <form
      data-testid="weather-search-form"
      className="d-flex flex-column flex-md-row"
      onSubmit={onSubmit}
    >
      <StyledTextInput
        autoFocus
        aria-label="City"
        data-testid="weather-search-city-input"
        type="text"
        placeholder="Enter a city"
        className="border-0"
        onChange={e => setCity(e.target.value)}
        defaultValue={city}
      />
      <Select
        aria-label="Option to select country"
        placeholder="Enter a country"
        options={options}
        value={defaultValue}
        // Relevant GitHub issue about onChange's TypeScript problems
        // https://github.com/JedWatson/react-select/issues/2902
        onChange={({ value }: any) => setCountry(value)}
        styles={{
          container: (defaultStyles: object) => ({
            ...defaultStyles,
            borderRadius: '.5rem',
            '@media only screen and (max-width: 767.98px)': {
              marginTop: '1rem',
            },
            '@media only screen and (min-width: 768px)': {
              width: '300px',
              marginLeft: '1rem',
            },
          }),
          control: (defaultStyles: object) => ({
            ...defaultStyles,
            border: 'none',
            backgroundColor: 'transparent',
            boxShadow: 'none',
          }),
          placeholder: (defaultStyles: object) => ({
            ...defaultStyles,
            margin: '0',
            color: 'var(--lynx-white)',
          }),
          valueContainer: (defaultStyles: object) => ({
            ...defaultStyles,
            backgroundColor: 'var(--black-pearl)',
            borderRadius: '.5rem 0 0 .5rem',
            padding: '1rem',
          }),
          indicatorsContainer: (defaultStyles: object) => ({
            ...defaultStyles,
            backgroundColor: 'var(--black-pearl)',
            borderRadius: '0 .5rem .5rem 0',
          }),
          menuList: (defaultStyles: object) => ({
            ...defaultStyles,
            backgroundColor: 'var(--black-pearl)',
          }),
          option: (defaultStyles: object, { isFocused }: SelectState) => ({
            ...defaultStyles,
            backgroundColor: isFocused ? 'var(--lynx-white)' : 'inherit',
            color: isFocused ? 'inherit' : 'var(--white)',
            fontSize: '1rem',
            cursor: 'pointer',
          }),
          singleValue: (defaultStyles: object) => ({
            ...defaultStyles,
            color: 'var(--white)',
            fontSize: '1rem',
          }),
          input: (defaultStyles: object) => ({
            ...defaultStyles,
            color: 'var(--white)',
            backgroundColor: 'var(--black-pearl)',
            fontSize: '1rem',
            margin: '0 0 0 2px',
            padding: '0',
          }),
          noOptionsMessage: (defaultStyles: object) => ({
            ...defaultStyles,
            fontSize: '1.2rem',
          })
        }}
      />
      <StyledSubmitButton
        data-testid="weather-search-submit-button"
        type="submit"
        className="border-0 rounded align-self-center py-1 px-2 mt-4 mt-md-0 ml-md-4"
      >
        SEARCH
      </StyledSubmitButton>
    </form>
  )
}

export default WeatherSearch
