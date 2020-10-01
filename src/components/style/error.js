import styled from 'styled-components'

export const ErrorWrapper = styled.div`
  font-size: 1.5rem;
  letter-spacing: 1px;
  padding: 1em 0;
`

export const NotFoundWrapper = styled.div`
  .page_404 {
    padding: 40px 0;
    background: #fff;
    font-family: 'Arvo', serif;
    text-align: center;
    img {
      width: 100%;
    }
    .error_box {
      width: 100%;
    }
    span,
    span > a {
      color: #bdbdbd;
    }
  }
  .four_zero_four_bg {
    background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
    height: 400px;
    background-position: center;
  }
  .four_zero_four_bg h1 {
    font-size: 80px;
    text-align: center;
  }
  .four_zero_four_bg h3 {
    font-size: 80px;
  }
  .link_404 {
    color: #fff !important;
    padding: 10px 20px;
    background: #39ac31;
    margin: 20px 0;
    display: inline-block;
  }
  .contant_box_404 {
    margin-top: -50px;
    text-align: center;
  }
`
