import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Loading, Nav, ProductForm } from '@base-components';
import {
  BUTTONS_LABELS,
  LOGO_SRC,
  NAV_PATHS,
  TEXT_CONTENT,
  ProductsProxy,
} from '@utils';
import { PageTitle } from './EditProduct.styled';

export default function EditProduct() {
  const navigate = useNavigate();
  const { id } = useParams();

  const isAdminMode = false;

  const [isDataFetched, setIsDataFetched] = useState(false);
  const [productData, setProductData] = useState({
    productName: null,
    productPrice: null,
    productImage: null,
  });

  const onSubmitHandler = (data) => {
    const isUpdated = ProductsProxy.put(data, id);
    if (isUpdated) navigate(NAV_PATHS.HOME_PAGE);
  };

  useEffect(() => {
    ProductsProxy.getData(id)
      .then((data) => {
        const { productName, productPrice, productImage } = data;
        setProductData({ productName, productPrice, productImage });
        setIsDataFetched(true);
      })
      .catch(() => {});

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isDataFetched ? (
    <div>
      <Nav logoUrl={LOGO_SRC}>
        <PageTitle>{TEXT_CONTENT.EDIT_PAGE_TITLE}</PageTitle>
      </Nav>
      <ProductForm
        initialProductImage={productData.productImage}
        initialProductName={productData.productName}
        initialProductPrice={+productData.productPrice}
        isReadOnlyMode={!isAdminMode}
        onSubmit={onSubmitHandler}
        submitButtonLabel={BUTTONS_LABELS.EDIT_PAGE_SUBMIT}
      />
    </div>
  ) : (
    <Loading />
  );
}
