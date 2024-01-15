# Generated by Django 4.0.3 on 2024-01-14 10:33

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AuthUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128)),
                ('last_login', models.DateTimeField(blank=True, null=True)),
                ('is_superuser', models.IntegerField()),
                ('username', models.CharField(max_length=150, unique=True)),
                ('first_name', models.CharField(max_length=150)),
                ('last_name', models.CharField(max_length=150)),
                ('email', models.CharField(max_length=254)),
                ('is_staff', models.IntegerField()),
                ('is_active', models.IntegerField()),
                ('date_joined', models.DateTimeField()),
                ('keywords', models.CharField(blank=True, max_length=254, null=True)),
                ('summary', models.TextField(blank=True, null=True)),
                ('created_at', models.DateTimeField()),
                ('modified_at', models.DateTimeField(blank=True, null=True)),
                ('deleted_at', models.DateTimeField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='FeedbackResult',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('form_id', models.IntegerField()),
                ('tag', models.CharField(max_length=255)),
                ('respondent_name', models.CharField(max_length=255)),
                ('category', models.CharField(blank=True, max_length=255, null=True)),
                ('summary', models.TextField(blank=True, null=True)),
                ('created_at', models.DateTimeField()),
                ('modified_at', models.DateTimeField(blank=True, null=True)),
                ('field', models.DateTimeField(blank=True, db_column='Field', null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Form',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('user_id', models.IntegerField()),
                ('link', models.CharField(blank=True, max_length=255, null=True)),
                ('created_at', models.DateTimeField()),
                ('modified_at', models.DateTimeField(blank=True, null=True)),
                ('deleted_at', models.DateTimeField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='MultipleChoice',
            fields=[
                ('id', models.CharField(max_length=255, primary_key=True, serialize=False)),
                ('question_id', models.IntegerField()),
                ('choice_context', models.CharField(max_length=255)),
                ('select_limit', models.IntegerField(blank=True, null=True)),
                ('created_at', models.DateTimeField()),
                ('modified_at', models.DateTimeField(blank=True, null=True)),
                ('deleted_at', models.DateTimeField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Question',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('form_id', models.IntegerField()),
                ('context', models.CharField(max_length=255)),
                ('type', models.CharField(max_length=3)),
                ('created_at', models.DateTimeField()),
                ('modified_at', models.DateTimeField(blank=True, null=True)),
                ('deleted_at', models.DateTimeField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='QuestionAnswer',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('feedback_id', models.IntegerField()),
                ('question_id', models.IntegerField()),
                ('context', models.TextField(blank=True, null=True)),
                ('type', models.CharField(blank=True, max_length=1, null=True)),
                ('created_at', models.DateTimeField()),
                ('modified_at', models.DateTimeField(blank=True, null=True)),
                ('deleted_at', models.DateTimeField(blank=True, null=True)),
            ],
        ),
    ]