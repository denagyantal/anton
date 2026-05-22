import { schemaMigrations, createTable, addColumns } from '@nozbe/watermelondb/Schema/migrations';

export const migrations = schemaMigrations({
  migrations: [
    {
      toVersion: 7,
      steps: [
        createTable({
          name: 'job_photos',
          columns: [
            { name: 'job_id', type: 'string' },
            { name: 'local_uri', type: 'string', isOptional: true },
            { name: 'remote_url', type: 'string', isOptional: true },
            { name: 'caption', type: 'string', isOptional: true },
            { name: 'taken_at', type: 'number', isOptional: true },
            { name: 'created_at', type: 'number' },
            { name: 'updated_at', type: 'number' },
          ],
        }),
      ],
    },
    {
      toVersion: 6,
      steps: [
        createTable({
          name: 'jobs',
          columns: [
            { name: 'account_id', type: 'string' },
            { name: 'customer_id', type: 'string' },
            { name: 'quote_id', type: 'string', isOptional: true },
            { name: 'assigned_to_id', type: 'string', isOptional: true },
            { name: 'status', type: 'string' },
            { name: 'title', type: 'string' },
            { name: 'description', type: 'string', isOptional: true },
            { name: 'scheduled_start', type: 'number', isOptional: true },
            { name: 'scheduled_end', type: 'number', isOptional: true },
            { name: 'completed_at', type: 'number', isOptional: true },
            { name: 'signature_url', type: 'string', isOptional: true },
            { name: 'notes', type: 'string', isOptional: true },
            { name: 'created_at', type: 'number' },
            { name: 'updated_at', type: 'number' },
          ],
        }),
        createTable({
          name: 'schedule_events',
          columns: [
            { name: 'account_id', type: 'string' },
            { name: 'job_id', type: 'string', isOptional: true },
            { name: 'assigned_to_id', type: 'string', isOptional: true },
            { name: 'customer_id', type: 'string', isOptional: true },
            { name: 'title', type: 'string' },
            { name: 'start_time', type: 'number' },
            { name: 'end_time', type: 'number' },
            { name: 'all_day', type: 'boolean' },
            { name: 'reminder_minutes', type: 'number' },
            { name: 'reminder_sent', type: 'boolean' },
            { name: 'external_calendar_id', type: 'string', isOptional: true },
            { name: 'created_at', type: 'number' },
            { name: 'updated_at', type: 'number' },
          ],
        }),
      ],
    },
    {
      toVersion: 5,
      steps: [
        addColumns({
          table: 'quotes',
          columns: [
            { name: 'pdf_url', type: 'string', isOptional: true },
          ],
        }),
        createTable({
          name: 'quote_photos',
          columns: [
            { name: 'quote_id', type: 'string' },
            { name: 'local_uri', type: 'string', isOptional: true },
            { name: 'remote_url', type: 'string', isOptional: true },
            { name: 'caption', type: 'string', isOptional: true },
            { name: 'taken_at', type: 'number', isOptional: true },
            { name: 'created_at', type: 'number' },
            { name: 'updated_at', type: 'number' },
          ],
        }),
      ],
    },
    {
      toVersion: 4,
      steps: [
        createTable({
          name: 'quotes',
          columns: [
            { name: 'account_id', type: 'string' },
            { name: 'customer_id', type: 'string' },
            { name: 'created_by_id', type: 'string', isOptional: true },
            { name: 'status', type: 'string' },
            { name: 'subtotal', type: 'number' },
            { name: 'tax_amount', type: 'number' },
            { name: 'total', type: 'number' },
            { name: 'notes', type: 'string', isOptional: true },
            { name: 'approval_token', type: 'string', isOptional: true },
            { name: 'sent_at', type: 'number', isOptional: true },
            { name: 'approved_at', type: 'number', isOptional: true },
            { name: 'expires_at', type: 'number', isOptional: true },
            { name: 'created_at', type: 'number' },
            { name: 'updated_at', type: 'number' },
          ],
        }),
        createTable({
          name: 'line_items',
          columns: [
            { name: 'quote_id', type: 'string' },
            { name: 'pricebook_item_id', type: 'string', isOptional: true },
            { name: 'description', type: 'string' },
            { name: 'quantity', type: 'number' },
            { name: 'unit_price', type: 'number' },
            { name: 'total', type: 'number' },
            { name: 'sort_order', type: 'number' },
            { name: 'created_at', type: 'number' },
            { name: 'updated_at', type: 'number' },
          ],
        }),
      ],
    },
    {
      toVersion: 3,
      steps: [
        createTable({
          name: 'customers',
          columns: [
            { name: 'account_id', type: 'string' },
            { name: 'name', type: 'string' },
            { name: 'email', type: 'string', isOptional: true },
            { name: 'phone', type: 'string' },
            { name: 'address_line1', type: 'string', isOptional: true },
            { name: 'address_line2', type: 'string', isOptional: true },
            { name: 'city', type: 'string', isOptional: true },
            { name: 'state', type: 'string', isOptional: true },
            { name: 'zip', type: 'string', isOptional: true },
            { name: 'notes', type: 'string', isOptional: true },
            { name: 'quickbooks_customer_id', type: 'string', isOptional: true },
            { name: 'created_at', type: 'number' },
            { name: 'updated_at', type: 'number' },
          ],
        }),
      ],
    },
    {
      toVersion: 2,
      steps: [
        createTable({
          name: 'pricebook_items',
          columns: [
            { name: 'account_id', type: 'string' },
            { name: 'category', type: 'string' },
            { name: 'name', type: 'string' },
            { name: 'description', type: 'string', isOptional: true },
            { name: 'unit_price', type: 'number' },
            { name: 'unit_type', type: 'string' },
            { name: 'is_active', type: 'boolean' },
            { name: 'sort_order', type: 'number' },
            { name: 'created_at', type: 'number' },
            { name: 'updated_at', type: 'number' },
          ],
        }),
      ],
    },
  ],
});
