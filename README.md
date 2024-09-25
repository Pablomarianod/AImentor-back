# AImentor-back
Definir los tipos de branches:

Main: La rama principal, estable, que siempre debe estar lista para producción.
Development: La rama donde se integra el trabajo de los desarrolladores antes de fusionarse en "main". Generalmente es una versión menos estable que "main".
Feature: Ramas que se crean para desarrollar una nueva funcionalidad. Se basan en "development" y se fusionan de vuelta tras su finalización y revisión.
Bugfix: Ramas para corregir errores menores que se descubren en "development". Se crean a partir de "development" y se fusionan de vuelta una vez resueltos.
Release: Ramas para preparar una versión lista para producción. Se crean desde "development" y permiten ajustes finales antes de la fusión en "main".
Hotfix: Ramas para corregir errores críticos en producción. Se crean a partir de "main" y se fusionan tanto en "main" como en "development" después de su corrección.
Proceso de creación, fusión y eliminación:

Las branches feature, bugfix se crean desde "development" y deben fusionarse mediante un pull request que pase por una revisión de código.
Las branches release se crean desde "development" cuando el proyecto está cerca de una nueva versión estable. Tras la fusión en "main", se elimina.
Las branches hotfix se crean directamente desde "main" para solucionar problemas críticos y se fusionan tanto en "main" como en "development" para que la corrección esté en ambas ramas.
Formato de nombres de branches:

Usar un formato claro para los nombres que refleje el propósito de la branch:
Para funcionalidades nuevas: feature/nueva-funcion
Para correcciones: bugfix/correccion-error
Para arreglos urgentes en producción: hotfix/correccion-urgente
Para lanzamientos: release/v1.0.0