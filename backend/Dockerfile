# backend/Dockerfile
FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

WORKDIR /app/backend

# (only if you need these system deps; keep since you had them)
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential libpq-dev && rm -rf /var/lib/apt/lists/*

COPY backend/requirements.txt ./
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copy backend code AND the frontend (templates + static)
COPY backend/ /app/backend/
COPY frontend/ /app/frontend/

# (optional) include IGV/bigBed assets so they’re served via /static/annotations/...
# If these live at repo root "files_for_igv", uncomment:
# COPY files_for_igv/ /app/frontend/static/annotations/

# Collect static into STATIC_ROOT for WhiteNoise
# (Your manage.py is in /app/backend, and STATIC_ROOT points inside backend)
RUN python manage.py collectstatic --noinput

EXPOSE 8000
CMD ["gunicorn", "mirgen_site.wsgi:application", "--bind", "0.0.0.0:8000", "--workers", "3"]