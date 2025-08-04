# backend/Dockerfile
FROM python:3.12-slim
WORKDIR /app/backend
RUN apt-get update \
    && apt-get install -y --no-install-recommends build-essential libpq-dev \
    && rm -rf /var/lib/apt/lists/*
COPY backend/requirements.txt ./
RUN pip install --upgrade pip && pip install -r requirements.txt
COPY backend/ ./
EXPOSE 8000
CMD ["gunicorn", "mirgen_site.wsgi:application", "--bind", "0.0.0.0:8000"]