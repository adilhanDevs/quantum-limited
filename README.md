Quantum Limited is a Next.js public website with a separate Django REST backend for editable portfolio and contact content.

## Getting Started

Run the frontend development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Set `NEXT_PUBLIC_API_URL` in `.env.local` to point at the Django backend. If it is missing or the backend is unavailable, the site falls back to built-in portfolio/contact content.

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

## Django Backend

The backend lives in `backend/` and uses Django Admin for all write operations. Public visitors only read from REST endpoints.

### Run Locally

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
copy .env.example .env
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

Admin panel: [http://localhost:8000/admin/](http://localhost:8000/admin/)

If the admin appears as plain unstyled HTML locally, check that `DJANGO_DEBUG=True` in `backend/.env`, then restart `runserver`. For production-like testing, run:

```bash
python manage.py collectstatic
python manage.py runserver --insecure
```

Static/media settings used by the backend:

- `STATIC_URL=/static/`
- `STATIC_ROOT=backend/staticfiles`
- `MEDIA_URL=/media/`
- `MEDIA_ROOT=backend/media`

Public API:

- `GET /api/projects/` returns active portfolio projects ordered by `order`.
- `GET /api/contact-info/` returns current contact information.
- `GET /api/site-links/` returns active site links if needed later.

Backend environment variables:

- `DJANGO_SECRET_KEY`
- `DJANGO_DEBUG`
- `DJANGO_ALLOWED_HOSTS`
- `DJANGO_CORS_ALLOWED_ORIGINS`
- `DJANGO_CSRF_TRUSTED_ORIGINS`

### Admin Users

Create the first admin user:

```bash
python manage.py createsuperuser
```

Add another admin user later:

```bash
python manage.py createsuperuser --username another_admin --email admin@example.com
```

Only staff/superuser accounts can access Django Admin. There is no public registration flow.

### PythonAnywhere Deployment

1. Upload or clone the repo on PythonAnywhere.
2. Create a virtualenv and install backend dependencies:

```bash
cd ~/quantum-limited/backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

3. Create `backend/.env` with production values:

```env
DJANGO_SECRET_KEY=your-production-secret
DJANGO_DEBUG=False
DJANGO_ALLOWED_HOSTS=yourusername.pythonanywhere.com,your-domain.com
DJANGO_CORS_ALLOWED_ORIGINS=https://your-frontend-domain.com
DJANGO_CSRF_TRUSTED_ORIGINS=https://yourusername.pythonanywhere.com,https://your-domain.com
```

4. Run database setup and collect static files:

```bash
python manage.py migrate
python manage.py createsuperuser
python manage.py collectstatic
```

5. In the PythonAnywhere Web tab, configure the WSGI file to point to:

```python
import os
import sys

path = "/home/yourusername/quantum-limited/backend"
if path not in sys.path:
    sys.path.append(path)

os.environ["DJANGO_SETTINGS_MODULE"] = "quantum_backend.settings"

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
```

6. In PythonAnywhere static files mappings, add:

- URL: `/static/` Directory: `/home/yourusername/quantum-limited/backend/staticfiles`
- URL: `/media/` Directory: `/home/yourusername/quantum-limited/backend/media`

7. Reload the web app. The admin panel should load with Jazzmin styling at `/admin/`.

For production, deploy the backend separately, set `DJANGO_DEBUG=False`, configure allowed hosts/CORS origins/static mappings, and point the frontend `NEXT_PUBLIC_API_URL` to the backend base URL.
