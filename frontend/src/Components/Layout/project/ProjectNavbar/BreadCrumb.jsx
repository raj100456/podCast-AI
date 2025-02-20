import React, { useState, useEffect } from 'react';
import { Link,  useParams } from 'react-router-dom';

function BreadCrumb() {
  const { projectId, fileId } = useParams();
  const [breadcrumbItems, setBreadcrumbItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const items = [
      { name: 'Home', path: '/' },
    ];

    if (projectId) {
      items.push({ name: 'Project', path: `/projects/${projectId}` });
    }

    if (fileId) {
      items.push({ name: 'Add your Podcast', path: `/projects/${projectId}/file/${fileId}` });
    }

    setTimeout(() => {
      setBreadcrumbItems(items);
      setIsLoading(false);
    }, 300); // Simulate a short delay for smooth transition
  }, [projectId, fileId]);

  return (
    <nav className="text-xl">
      <ol className="list-none p-0 inline-flex transition-opacity duration-300 ease-in-out" style={{ opacity: isLoading ? 0 : 1 }}>
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1;
          return (
            <li key={item.name} className="flex items-center">
              {index > 0 && <span className="mx-2 text-gray-500">/</span>}
              {isLast ? (
                <span className="text-gray-700">{item.name}</span>
              ) : (
                <Link to={item.path} className="text-gray-500 hover:text-gray-700">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default BreadCrumb;