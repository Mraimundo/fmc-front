import React, { useState, useEffect, useCallback } from 'react';

import getGalleryList from 'services/gallery/getGalleryList';
import { Media } from 'services/gallery/interfaces';
import { Pagination } from 'config/constants/vendavallPaginationInterface';

import { ImagesGrid, VideosGrid, DocumentsGrid } from 'components/Gallery';
import { useAuth } from 'context/AuthContext';
import { Container, Content, Separator, Button } from './styles';

const List: React.FC = () => {
  const [images, setImages] = useState<Media[]>([]);
  const [videos, setVideos] = useState<Media[]>([]);
  const [documents, setDocuments] = useState<Media[]>([]);
  const { simulating } = useAuth();

  const [imagesPagination, setImagesPagination] = useState<Pagination>(
    {} as Pagination,
  );
  const [videosPagination, setVideosPagination] = useState<Pagination>(
    {} as Pagination,
  );
  const [documentsPagination, setDocumentsPagination] = useState<Pagination>(
    {} as Pagination,
  );

  useEffect(() => {
    const load = async () => {
      const [dataImages, dataVideos, dataDocuments] = await Promise.all([
        getGalleryList({ page: 1, limit: 6, type: 'image' }),
        getGalleryList({ page: 1, limit: 3, type: 'video' }),
        getGalleryList({ page: 1, limit: 4, type: 'document' }),
      ]);
      setImages(dataImages.data);
      setImagesPagination(dataImages.pagination);
      setVideos(dataVideos.data);
      setVideosPagination(dataVideos.pagination);
      setDocuments(dataDocuments.data);
      setDocumentsPagination(dataDocuments.pagination);
    };

    load();
  }, []);

  const handleLoadMoreImages = useCallback(() => {
    if (imagesPagination.current_page === imagesPagination.last_page) return;

    getGalleryList({
      page: imagesPagination.current_page + 1,
      limit: 6,
      type: 'image',
    }).then(({ data, pagination }) => {
      setImagesPagination(pagination);
      setImages([...images, ...data]);
    });
  }, [images, imagesPagination]);

  const handleLoadMoreVideos = useCallback(() => {
    if (videosPagination.current_page === videosPagination.last_page) return;

    getGalleryList({
      page: videosPagination.current_page + 1,
      limit: 3,
      type: 'video',
    }).then(({ data, pagination }) => {
      setVideosPagination(pagination);
      setVideos([...videos, ...data]);
    });
  }, [videos, videosPagination]);

  const handleLoadMoreDocuments = useCallback(() => {
    if (documentsPagination.current_page === documentsPagination.last_page)
      return;

    getGalleryList({
      page: documentsPagination.current_page + 1,
      limit: 4,
      type: 'document',
    }).then(({ data, pagination }) => {
      setDocumentsPagination(pagination);
      setDocuments([...documents, ...data]);
    });
  }, [documents, documentsPagination]);

  return (
    <Container>
      <Content>
        <h3>Biblioteca Juntos</h3>
        <h6>Imagens</h6>
        <ImagesGrid gallery={images} simulating={simulating} />
        {imagesPagination.current_page !== imagesPagination.last_page && (
          <Button
            buttonRole="primary"
            type="button"
            onClick={handleLoadMoreImages}
          >
            Carregar mais imagens
          </Button>
        )}
        <Separator />
        <h6>V??deos</h6>
        <VideosGrid gallery={videos} />
        {videosPagination.current_page !== videosPagination.last_page && (
          <Button
            buttonRole="primary"
            type="button"
            onClick={handleLoadMoreVideos}
          >
            Carregar mais v??deos
          </Button>
        )}
        <Separator />
        <h6>Documentos</h6>
        <DocumentsGrid gallery={documents} simulating={simulating} />
        {documentsPagination.current_page !== documentsPagination.last_page && (
          <Button
            buttonRole="primary"
            type="button"
            onClick={handleLoadMoreDocuments}
          >
            Carregar mais documentos
          </Button>
        )}
      </Content>
    </Container>
  );
};

export default List;
