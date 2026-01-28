# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e3]:
      - img "NutriApp" [ref=e5]
      - generic [ref=e6]: NutriApp
    - navigation [ref=e7]:
      - link "Recetas" [ref=e8] [cursor=pointer]:
        - /url: /dishes
      - button "Logout" [ref=e10]
  - main [ref=e11]:
    - generic [ref=e12]:
      - generic [ref=e13]:
        - heading "Sugerencias de Platillos" [level=1] [ref=e14]
        - link "+ Agregar Platillo" [ref=e15] [cursor=pointer]:
          - /url: /dishes/new
      - generic [ref=e17]: No hay platillos registrados.
  - button "Open Next.js Dev Tools" [ref=e23] [cursor=pointer]:
    - img [ref=e24]
  - alert [ref=e27]
```