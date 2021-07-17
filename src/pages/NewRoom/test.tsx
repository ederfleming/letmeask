import { render, screen } from '@testing-library/react'

import NewRoom from '.'

describe('<NewRoom />', () => {
  it('should render the heading', () => {
    const { container } = render(<NewRoom />)

    expect(screen.getByRole('heading', { name: /NewRoom/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
