# miRGen v5 - miRNA Database Website

A comprehensive web platform for exploring and analyzing microRNA (miRNA) data, built with Django and modern web technologies.

## 🌟 Features

- **Advanced Search**: Search miRNAs, target genes, sequences, and pathways
- **Database Browser**: Explore data by species, miRNAs, and genes
- **Data Downloads**: Export data in multiple formats (CSV, Excel, JSON)
- **RESTful API**: Programmatic access to all database features
- **Modern UI**: Responsive design with Bootstrap 5 and custom styling
- **Interactive Features**: Real-time search, animations, and data visualization

## 🚀 Quick Start

### Prerequisites

- Python 3.8+
- pip
- Virtual environment (recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd miRGen_website
   ```

2. **Set up the backend**
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

3. **Configure the database**
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

4. **Create a superuser (optional)**
   ```bash
   python manage.py createsuperuser
   ```

5. **Start the development server**
   ```bash
   python manage.py runserver
   ```

6. **Access the website**
   - Main site: http://localhost:8000/
   - Admin interface: http://localhost:8000/admin/
   - Test page: http://localhost:8000/test/

## 📁 Project Structure

```
miRGen_website/
├── backend/                 # Django backend
│   ├── core/               # Main Django app
│   │   ├── models.py       # Database models
│   │   ├── views.py        # View functions and classes
│   │   ├── urls.py         # URL routing
│   │   └── admin.py        # Django admin configuration
│   ├── mirgen_site/        # Django project settings
│   ├── manage.py           # Django management script
│   └── requirements.txt    # Python dependencies
├── frontend/               # Frontend assets
│   ├── static/            # Static files (CSS, JS, images)
│   │   ├── css/           # Stylesheets
│   │   ├── js/            # JavaScript files
│   │   └── img/           # Images
│   └── templates/         # HTML templates
├── docker-compose.yml     # Docker configuration
└── README.md             # This file
```

## 🗄️ Database Models

### Core Entities

- **Species**: Different organisms in the database
- **MiRNA**: MicroRNA sequences and annotations
- **Gene**: Target genes and their information
- **MiRNATarget**: miRNA-gene target relationships
- **ExpressionData**: miRNA expression profiles
- **Pathway**: Biological pathways and gene sets
- **SearchLog**: User search tracking

### Key Relationships

- miRNAs belong to Species
- Genes belong to Species
- MiRNAs target Genes (many-to-many through MiRNATarget)
- Genes participate in Pathways (many-to-many)
- ExpressionData links miRNAs to tissue/condition data

## 🔍 Search Functionality

### Search Types

1. **miRNA Name**: Search by miRNA identifiers (e.g., hsa-miR-21-5p)
2. **Target Gene**: Search by gene names or symbols (e.g., TP53, PTEN)
3. **Sequence**: Search by RNA sequences
4. **Pathway**: Search by pathway names or descriptions

### Search Features

- Real-time search suggestions
- Advanced filtering options
- Export search results
- Search history tracking

## 📊 Data Visualization

### Available Visualizations

- miRNA expression heatmaps
- Target gene networks
- Pathway enrichment plots
- Species comparison charts

### Interactive Features

- Zoom and pan capabilities
- Data filtering
- Export to various formats
- Custom color schemes

## 🔌 API Documentation

### RESTful Endpoints

- `GET /api/mirnas/` - List miRNAs
- `GET /api/mirnas/{id}/` - Get miRNA details
- `GET /api/genes/` - List genes
- `GET /api/genes/{id}/` - Get gene details
- `POST /api/search/` - Search functionality
- `GET /api/expression/{mirna_id}/` - Get expression data

### Authentication

API access requires authentication. Contact administrators for API keys.

## 🎨 Frontend Technologies

- **Bootstrap 5**: Responsive CSS framework
- **Font Awesome**: Icon library
- **Google Fonts**: Typography (Inter font family)
- **Custom CSS**: Enhanced styling and animations
- **Vanilla JavaScript**: Interactive features and API calls

### Key Features

- Responsive design for all devices
- Modern animations and transitions
- Accessibility compliant
- Cross-browser compatibility

## 🚀 Deployment

### Development

```bash
python manage.py runserver
```

### Production

1. **Set up environment variables**
   ```bash
   export DEBUG=False
   export SECRET_KEY='your-secret-key'
   export ALLOWED_HOSTS='your-domain.com'
   ```

2. **Collect static files**
   ```bash
   python manage.py collectstatic
   ```

3. **Use a production server**
   - Gunicorn + Nginx (recommended)
   - Apache + mod_wsgi
   - Docker deployment

### Docker Deployment

```bash
docker-compose up -d
```

## 📈 Performance Optimization

### Database Optimization

- Database indexing on frequently searched fields
- Query optimization with select_related and prefetch_related
- Caching for frequently accessed data

### Frontend Optimization

- Minified CSS and JavaScript
- Image optimization
- CDN for static assets
- Browser caching

## 🔧 Configuration

### Settings

Key settings in `backend/mirgen_site/settings.py`:

- `DEBUG`: Development mode (set to False in production)
- `ALLOWED_HOSTS`: Permitted hostnames
- `STATIC_URL` and `STATICFILES_DIRS`: Static file configuration
- `DATABASES`: Database configuration

### Customization

- Modify templates in `frontend/templates/`
- Update styles in `frontend/static/css/`
- Add JavaScript functionality in `frontend/static/js/`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

### Development Guidelines

- Follow PEP 8 for Python code
- Use meaningful commit messages
- Add documentation for new features
- Test thoroughly before submitting

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Django framework and community
- Bootstrap team for the CSS framework
- Font Awesome for icons
- All contributors and users

## 📞 Support

For support and questions:

- Create an issue on GitHub
- Contact the development team
- Check the documentation

## 🔄 Version History

- **v5.0.0**: Initial release with comprehensive miRNA database
- **v5.1.0**: Added advanced search and visualization features
- **v5.2.0**: API endpoints and data export functionality

---

**miRGen v5** - Empowering miRNA research through comprehensive data access and analysis tools.
